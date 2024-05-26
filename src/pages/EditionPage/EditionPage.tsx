/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 12/05/2024 14:30:56
*/
import React, { FC, useEffect, useRef } from 'react'
// import Loading from '../Loading/Loading';
import './EditionPage.css'
import PageBanner from '../../components/PageBanner/PageBanner'
import TemplateList from '../../components/TemplateList/TemplateList'
import EditionCopie from '../../components/EditionCopie/EditionCopie'
import SubscribeForm from '../../components/SubscribeForm/SubscribeForm'
import { useSelector } from 'react-redux'
import { getBill } from '../../redux/selectors/selectors'
import { addBill } from '../../database/apialldocs'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import BillSearching from '../../components/BillSearching/BillSearching'

interface EditionPageProps {}

const EditionPage: FC<EditionPageProps> = () => {
  const reportTemplateRef = useRef<any>()
  // const [state, setState] = useState<any>(null)
  const bill = useSelector(getBill)

  const handleCreatepdf = async () => {
    addBill(bill)
    
    const input = reportTemplateRef.current

    try {
      const canvas = await html2canvas(input)
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'A4',
      })

      const width = pdf.internal.pageSize.getWidth()
      const heigth = (canvas.height * width) / canvas.width

      pdf.addImage(imgData, 'PNG', 0, 0, width, heigth)
      pdf.save(`${bill.reference}.pdf`)
      
     
    } catch (error) {
      console.error('Error generating PDF', error)
    }
  }

  useEffect(() => {
    const runLocalData = async () => {}
    runLocalData()
  }, [])

  return (
    <div className="TaskPage bg-white shadow-2xl w-full  main">
      <PageBanner />
      <BillSearching />
      <TemplateList />
      <div ref={reportTemplateRef}>
        <EditionCopie />
      </div>

      <div className="callToAction my-[3rem] p-1 w-full flex justify-center ">
        <button
          onClick={handleCreatepdf}
          className="w-[70%] font-bold border-none text-white p-[1rem] rounded bg-[rgb(255,115,0)] cursor-pointer "
        >
          Creer le PDF
        </button>
      </div>

      <SubscribeForm />
    </div>
  )
}

export default EditionPage
