import './Diets.css';
import DietCard from "../../../components/Cards/DietCard/DietCard";
import React, {useEffect, useState} from "react";
import AddDietModal from "../../../components/Modals/Diets/AddDietModal/AddDietModal";
import {Button} from "react-bootstrap";
import { MdAdd } from "react-icons/md";
import dietIcons from '../Diets/dietsIcons';
const AddDietIcon = MdAdd as React.ComponentType<any>;

export default function Diets() {
    type Diet = {
        dietId: number;
        type: string;
        kcalDeficit: number;
    }
    const [diets, setDiets] = useState<Diet[]>([]);
    const [addDietModal,setDietModalShow] = useState(false);
    const [searchedValue, setSearchedValue] = useState("");

    useEffect(() => {
        async function getDiets() {
            const response = await fetch('https://localhost:7081/api/Diets');
            const json = await response.json();
            setDiets(json);
        }
        getDiets();
    }, []);

    async function getPDF(dietId : number) {
        const response = await fetch(`https://localhost:7081/api/Diets/${dietId}/pdf`);
        if (!response.ok) {
            alert("Nie znaleziono pliku PDF!");
            return;
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        window.open(url);
    }

    let searchedDiets = diets.filter(diet =>
        (diet.type?.toLowerCase().includes(searchedValue?.toLowerCase() || "")) ||
        (diet.kcalDeficit != null && diet.kcalDeficit.toString().includes(searchedValue || ""))
    ).sort((a, b) => a.kcalDeficit - b.kcalDeficit);

    return (
        <>
            <div className={"diets-container"}>
                <div className={"client-search"}>
                    <input onChange={(e)=>{setSearchedValue(e.target.value.toString())}} type={"text"} placeholder={"wyszukaj dietę 🔎"}/>
                    <Button className={"add-btn"} variant={"success"}>
                        <div onClick={() => setDietModalShow(true)}><AddDietIcon/></div>
                    </Button>
                </div>
                {
                    searchedDiets.map(diet => {
                        const Icon = dietIcons.get(diet.type);
                        return (<div key={diet?.dietId} onClick={() => {getPDF(diet?.dietId)}}>
                            <DietCard icon={Icon ? <Icon/> : null} name={diet.type} kcal={diet.kcalDeficit}/>
                        </div>)
                    })
                }
            </div>
            <AddDietModal show={addDietModal} onHide={() => setDietModalShow(false)} />
        </>
    );
}