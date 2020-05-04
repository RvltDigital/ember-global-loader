import Service from '@ember/service';
import { A } from '@ember/array';

class LoadingService extends Service
{
    instances = A([]);

    start()
    {
        const instance = {};
        this.instances.addObject(instance);
        return instance;
    }

    stop(instance)
    {
        this.instances.removeObject(instance);
    }
}


export default LoadingService;
