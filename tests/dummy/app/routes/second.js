import Route from '@ember/routing/route';
import { Promise } from 'rsvp';
import { loader } from 'ember-global-loader';

class SecondRoute extends Route
{
    @loader
    async model()
    {
        await new Promise((resolve) => setTimeout(resolve, 3000));
    }
}

export default SecondRoute;
