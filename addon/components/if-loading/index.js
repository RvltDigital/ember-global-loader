import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

class IfLoadingComponent extends Component
{
    @service loading;
}

export default IfLoadingComponent;
