import './Diets.css';
import DietCard from "../../components/DietCard/DietCard";
import { TbMeat } from "react-icons/tb";
import {FaFish} from "react-icons/fa";
import { GiBroccoli } from "react-icons/gi";
import { GiJellyBeans } from "react-icons/gi";

const FishIcon = FaFish as React.ComponentType<any>;
const MeatIcon = TbMeat as React.ComponentType<any>;
const VegetarianIcon = GiBroccoli as React.ComponentType<any>;
const Vege = GiJellyBeans as React.ComponentType<any>;


export function Diets() {

    return (
        <>
            <div className={"diets-container"}>
                <DietCard icon={<FishIcon/>} name={"Rybna"} kcal={1200}/>
                <DietCard icon={<MeatIcon/>} name={"Zwyczajna"} kcal={2500}/>
                <DietCard icon={<VegetarianIcon/>} name={"Wegetariańska"} kcal={2100}/>
                <DietCard icon={<Vege/>} name={"Vege"} kcal={1500}/>
                <DietCard icon={<MeatIcon/>} name={"Zwyczajna"} kcal={2200}/>
                <DietCard icon={<FishIcon/>} name={"Rybna"} kcal={2800}/>
                <DietCard icon={<Vege/>} name={"Vege"} kcal={1900}/>
                <DietCard icon={<VegetarianIcon/>} name={"Wegetariańska"} kcal={2550}/>
            </div>
        </>
    );
}