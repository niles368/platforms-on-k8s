'use client'
import styles from '@/app/styles/agenda.module.css'
import { useState, useEffect } from 'react'
import AgendaList from "../components/agenda/agendalist"


export default async function Agenda() {


  return (
    <main className={styles.main}>
      <div className="grid content">
        <div className="col full">
          <h1>Agenda</h1>
          <div >
            <AgendaList></AgendaList>
          </div>
        </div>
      </div>

       
    </main>
  )
}