import Route from '@ember/routing/route';
import { Promise } from 'rsvp';
import { loader } from 'ember-global-loader';

class FirstRoute extends Route
{
    @loader
    async model()
    {
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
}

export default FirstRoute;
