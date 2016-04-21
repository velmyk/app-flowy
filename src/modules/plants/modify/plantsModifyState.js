// import PlantsModifyController from './PlantsListController';
import contentTemplate from './plants-modify-content.html';

export default {
    url: '/modify',
    views: {
        'content@main': {
            template: contentTemplate
        }
    }
};