import Stat from "./statut1_email"
import Statt from "./statut2_email"
import Link from "next/link"
import Button from "./button"
export default function Table(){
    return(
        <div>
            <table className="w-full border rounded rounded-lg mb-10 ">
                <thead className="font-bold m-auto bg-slate-50">
                    <tr className="m-auto">
                        <th className="text-medium px-6 py-3">Facture</th>
                        <th >Société</th>
                        <th >Débiteur / Débitrice</th>
                        <th >Montant</th>
                        <th >Email</th>
                        <th > </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border bg-white">
                            <td className=" text-center">237445704</td>
                            <td className=" text-center">InovaPulse</td>
                            <td className=" text-center"><div>
                                <p className="text-center"><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" text-center">€53,18</td>
                            <td className=" text-center"><Stat>En attente</Stat></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}>Voir la facture </Link>
                            </button></td>
                    </tr>
                    <tr className="border bg-slate-50">
                            <td className=" text-center">237445704</td>
                            <td className=" text-center">InovaPulse</td>
                            <td className=" text-center"><div>
                                <p className="text-center"><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" text-center">€53,18</td>
                            <td className=" text-center"><Statt><p className="text-green-700">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}>Voir la facture </Link>
                            </button></td>
                    </tr>
                    <tr className="border bg-white">
                            <td className=" text-center">237445704</td>
                            <td className=" text-center">InovaPulse</td>
                            <td className=" text-center"><div>
                                <p className="text-center"><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" text-center">€53,18</td>
                            <td className=" text-center"><Statt><p className="text-green-700">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}>Voir la facture </Link>
                            </button></td>
                    </tr>
                    <tr className="border bg-slate-50">
                            <td className=" text-center">237445704</td>
                            <td className=" text-center">InovaPulse</td>
                            <td className=" text-center"><div>
                                <p className="text-center"><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" text-center">€53,18</td>
                            <td className=" text-center"><Statt><p className="text-green-700">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}>Voir la facture </Link>
                            </button></td>
                    </tr>
                    <tr className="border bg-white">
                            <td className=" text-center">237445704</td>
                            <td className=" text-center">InovaPulse</td>
                            <td className=" text-center"><div>
                                <p className="text-center"><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" text-center">€53,18</td>
                            <td className=" text-center"><Statt><p className="text-green-700">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}>Voir la facture </Link>
                            </button></td>
                    </tr>
                    <tr className="border bg-slate-50">
                            <td className=" text-center">237445704</td>
                            <td className=" text-center">InovaPulse</td>
                            <td className=" text-center"><div>
                                <p className="text-center"><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" text-center">€53,18</td>
                            <td className=" text-center"><Statt><p className="text-green-700">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}>Voir la facture </Link>
                            </button></td>
                    </tr>
                    <tr className="border bg-white">
                            <td className=" text-center">237445704</td>
                            <td className=" text-center">InovaPulse</td>
                            <td className=" text-center"><div>
                                <p className="text-center"><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" text-center">€53,18</td>
                            <td className=" text-center"><Statt><p className="text-green-700">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}>Voir la facture </Link>
                            </button></td>
                    </tr>
                    <tr className="border bg-slate-50">
                            <td className=" text-center">237445704</td>
                            <td className=" text-center">InovaPulse</td>
                            <td className=" text-center"><div>
                                <p className="text-center"><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" text-center">€53,18</td>
                            <td className=" text-center"><Statt><p className="text-green-700">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}>Voir la facture</Link>
                            </button></td>
                    </tr>
                </tbody>
                
                
            </table>

           <div ><Link href={'/'}>
                <button className="bg-blue-700 border-2 border-gray-500 flex justify-between w-1/12 rounded-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                    <p>Accueil</p>
                </button></Link>
            </div> 

        </div>
    )
};