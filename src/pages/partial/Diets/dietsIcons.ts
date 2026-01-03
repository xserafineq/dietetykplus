import React from "react";
import {FaFish} from "react-icons/fa";
import {TbMeat} from "react-icons/tb";
import {GiBroccoli, GiJellyBeans} from "react-icons/gi";
import {FaEgg} from "react-icons/fa6";
import { FaAppleAlt } from "react-icons/fa";


const Rybna = FaFish as React.ComponentType<any>;
const Miesna = TbMeat as React.ComponentType<any>;
const Wegetarianska = GiBroccoli as React.ComponentType<any>;
const Vege = GiJellyBeans as React.ComponentType<any>;
const Keto = FaEgg as React.ComponentType<any>;
const Normal = FaAppleAlt as React.ComponentType<any>;

const dietIcons = new Map<string, React.ComponentType<any>>();
dietIcons.set("Rybna", Rybna);
dietIcons.set("Miesna", Miesna);
dietIcons.set("Wegetarianska", Wegetarianska);
dietIcons.set("Vege", Vege);
dietIcons.set("Keto", Keto);
dietIcons.set("Normalna", Normal);
export default dietIcons;