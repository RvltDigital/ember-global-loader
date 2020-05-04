import Controller from '@ember/controller';
import { action } from '@ember/object';
import { Promise } from 'rsvp';
import { inject as service } from '@ember/service';

class ApplicationController extends Controller
{
    @service loading;

    @action
    async letsLoad()
    {
        const instance = this.loading.start();

        await new Promise((resolve) => setTimeout(resolve, 3000));

        this.loading.stop(instance);
    }
}

export default ApplicationController;
