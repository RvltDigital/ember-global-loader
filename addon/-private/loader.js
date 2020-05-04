import { getOwner } from '@ember/application';

function loader(target, property, descriptor)
{
    if (typeof descriptor.value !== 'function') {
        throw new Error(`The property '${property}' is not a function.`);
    }

    const fn = descriptor.value;
    descriptor.value = function () {
        const loading = getOwner(this).lookup('service:loading');
        const instance = loading.start();

        const result = fn.call(this, ...arguments);
        if (typeof result.then !== 'function') {
            loading.stop(instance);
            return result;
        }

        result.then(() => { loading.stop(instance); return Promise.resolve(...arguments); })
          .catch(() => { loading.stop(instance); return Promise.reject(...arguments); })

        return result;
    }

    return descriptor;
}


export default loader;
