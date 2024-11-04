'use client'
import { useEffect, useState } from "react";
import { getAPI } from "@/utils/googleSheets";

import TopMenu from "@/view/TopMenu";
import Produtos from "@/view/produtos";
import FAQ from "@/view/faq";
import Contato from "@/view/contato";

export default function Page() {
  const [filterProdutos, setFilterProdutos] = useState('')
  const [produtos, setProdutos] = useState()
  const [faq, setFaq] = useState()
  const [contact, setContact] = useState()

  const getData = async () => {
    try {

      const res = await getAPI("products")
      console.log(res)
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      {/* <TopMenu setFilterProdutos={setFilterProdutos} />
      <Produtos filterProdutos={filterProdutos} produtos={produtos}/>
      <FAQ faq={faq}/>
      <Contato contact={contact}/> */}
    </>
  );
}
