'use client'
import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import MySVG from '../CircleSVG';

export default function ProgressWheel() {
  return (
    <main className='grid grid-cols-3 border gap-y-7 bg-slate-100 shadow-lg'>
        <MySVG percentage={35}/>
        <MySVG percentage={65}/>
        <MySVG percentage={90}/>
    </main>
  );
}
