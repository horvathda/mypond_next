import Layout from "../components/layout";
import RolunkPersons from '../components/Rolunk/RolunkPersons';
import RolunkSlider from '../components/Rolunk/RolunkSlider';

function Rolunk () {


 

    return(
<Layout>    
    <RolunkPersons />
    {/**
     * 
    <RolunkMotivation />
     */}
     
    <RolunkSlider />

    
</Layout>

);
}
export default Rolunk;