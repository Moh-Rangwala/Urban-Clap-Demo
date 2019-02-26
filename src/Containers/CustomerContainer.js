import { createMaterialTopTabNavigator, createNavigationContainer } from 'react-navigation';
import SERVICELIST from '../Screens/SERVICELIST';
import SERVICEREQUEST from '../Screens/SERVICEREQUEST';
import USERPROFILE from '../Screens/USERPROFILE';

const Customer = createMaterialTopTabNavigator(

    {
        SERVICES: SERVICELIST,
        
        REQUESTS: SERVICEREQUEST,
        
        PROFILE: USERPROFILE
    }

);

export default createNavigationContainer(Customer);
