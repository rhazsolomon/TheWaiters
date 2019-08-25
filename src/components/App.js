import React, { useState, useEffect } from 'react'
import { RegionQuestion } from './RegionQuestion'
import {SearchForm} from "./SearchForm";
import { GroupSizeQuestion } from './GroupSizeQuestion'
import { WalkLengthQuestion } from './WalkLengthQuestion'
import { getMeHuts } from '../api_access'
import { HuttCard } from './HutCard';
import { CardsContainer } from "./CardsContainer";
import rawHutData from "../data/huts.json"
import {Homepage} from "./Homepage"

export const App = () => {
  return <Homepage> </Homepage>

  
}

