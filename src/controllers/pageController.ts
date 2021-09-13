import { Request,Response } from "express";

import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet'

export const home = (req:Request,res:Response)=>{

  let list = Pet.getAll();

  res.render("pages/page",{
    list,
    menu: createMenuObject('all'),
    banner:{
      title: 'Todos os animais',
      background: 'allanimals'
    }
  });
}

export const dogs = (req:Request,res:Response)=>{

  let list = Pet.getFromType('dog');

  res.render("pages/page",{
    list,
    menu: createMenuObject('dog'),
    banner:{
      title: 'Cachorros',
      background: 'banner_dog'
    }
  });
}

export const cats = (req:Request,res:Response)=>{

  let list = Pet.getFromType('cat');

  res.render("pages/page",{
    list,
    menu: createMenuObject('cat'),
    banner:{
      title: 'Gatos',
      background: 'banner_cat'
    }
  });
}

export const fishes = (req:Request,res:Response)=>{

  let list = Pet.getFromType('fish')

  res.render("pages/page",{
    list,
    menu: createMenuObject('fish'),
    banner:{
      title: 'Peixes',
      background: 'banner_fish'
    }
  });
}