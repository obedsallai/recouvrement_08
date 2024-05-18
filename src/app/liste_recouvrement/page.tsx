import Image from "next/image"
import Link from "next/link"
import Button from "@/components/button"
import Table from "@/components/table"
import { table } from "console"
export default function Liste(){
    return <div>
            <div className="flex justify-between">
                <nav className='flex justify-left'>
                    <Image src={'/img/logo fh gestion 1.jpg'} width={152} height={58} alt="logo"></Image>
                    <div className="flex justify-between">
                        <Link href={"/donnee"} className="p-4 rounded-lg bg-slate-50 text-blue-800">Données</Link>
                        <Link href={"/automatisation"} className="p-4 rounded-lg ">Automatisations</Link>
                        <Link href={"/interfaces"} className="p-4 rounded-lg ">Interfaces</Link>
                        
                    </div>
                    
                </nav>
                <div className="flex justify-between w-2/12">
                        <div className="flex">
                        <svg className="mt-5 justify-left w-2/12 mt-4 ml-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                        <p style={{marginLeft:'-15px'}} className= " mt-4 bg-red-500 border-2 border-solid border-black w-1/12 h-6 text-sm  rounded-lg text-white text-center">2</p>
                        
                        
                            <Image className="justify-right ml-10" src={'/img/Ellipse 1.png'} width={50} height={20} alt="profile"></Image>
                        </div>
                </div>
        
            </div>
            {/* La premiere ligne de la page est constituée d'une nav et d'une div. */}
            <div className="bg-slate-50">
                <div className="flex justify-between mt-5 bg-slate-50">
                    <p className="text-xl font-bold ml-5">Impayés</p>                    
                   <div className="flex justify-between">
                            <button className="ml-5 p-1 bg-white rounded-lg border flex justify-between mr-2 text-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                Exporter
                            </button>
                        
                            <button className="ml-5 p-1 border-2 border-solid bg-blue-200 rounded-lg flex justify-between mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>
                                Ajouter
                            </button>
                        
                        
                    </div>
                    
                </div>
                <p className="mt-4 justify-left ml-5 bg-slate-50">Un aperçu de tous vos recouvrements d'impayés</p>
                
            </div>
            <div className="p-4 bg-slate-50">
            <Table></Table>

            </div>
            
            
            
        </div>
};