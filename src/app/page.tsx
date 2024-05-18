"use client"
import Button from "@/components/button"
import Link from "next/link"
import { useState } from "react"
export default function Formulaire(){
  const rounded='rounded-lg p-4'
  const mytext = 'text-lg '
  const [formData, setFormData]=useState({
    numero:'',
    societe:'',
    nom:'',
    prenom:'',
    email:'',
    montant:''
  });
  const [errors, setErrors]= useState({
    numero:false,
    societe:false,
    nom:false,
    prenom:false,
    email:false,
    montant:false
  });
  const handleChange=(e:any)=>{
    const {name,value}=e.target;
    setFormData({...formData, [name]:value});
  };
  const handleSubmit=(e:any)=>{
    e.preventDefault()
    const{numero, societe,nom,prenom,email,montant} = formData

    // Vérifier si les chaps sont vides ou pas...
    const newErrors = {
      numero:numero.trim()==='',
      societe:societe.trim()==='',
      nom:nom.trim()==='',
      prenom:prenom.trim()==='',
      email:email.trim()==='',
      montant:montant.trim()===''
    };
    setErrors(newErrors);
    if(!newErrors.numero && !newErrors.societe && newErrors.nom && newErrors.prenom && newErrors.email && newErrors.montant){
      console.log('Yes');
    }

  };

  return(<div className="pl-12">
    <div className="flex justify-between">
      <h3 className="font-bold p-8 text-blue-500 text-2xl pl-10">Recouvrement</h3>
      <Link href={'/liste_recouvrement'}>
        <button className=" flex justify-between rounded-lg border-2 border-gray-400 text-white bg-blue-700 mt-8">
          <p>Suivant</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>

        </button>
      </Link>      
      

    </div>
    
    <p className=" text-xl pl-10 text-gray-500 ">Ajouter un nouveau débiteur/débitrice</p>
    <hr className="border-gray-300 p-2 mx-auto mr-40 ml-10 w-8/12" />
          <form action="" onSubmit={handleSubmit} className="border-2 border-solid bg-slate-50 mr-40 ml-10 rounded-lg mb-10 w-8/12" >
            <div className="">
              <div className="flex justify-between">
                <div className="ml-4 p-4 mr-4 w-6/12 ">
                  <label htmlFor="numero" className={mytext}>Numéro de Facture</label><br />
                  <input name="numero" className={rounded} onChange={handleChange} placeholder=" 0002348572" type="text" value={formData.numero} />
                  {errors.numero && <span className="text-red-">Le champ Numéro est requis </span>}
                </div>
                <div className="p-4 mr-4 ml-4 w-6/12">
                  <label htmlFor="societe" className={mytext}>Société</label><br />
                  <input name="societe" className={rounded} value={formData.prenom} onChange={handleChange}  placeholder=" inovaPulse" type="text" />
                  {errors.societe && <span> Le champ Societe est requis </span>}
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between ">
                <div className="ml-4 p-4 mr-4 ml-4 w-6/12">
                  <label htmlFor="nom" className={mytext}>Nom</label><br />
                  <input name="nom" className={rounded} onChange={handleChange}  value={formData.nom} placeholder=" Doe" type="text" />
                  {errors.nom && <span> Le champ Nom est requis </span>}
                </div>
                <div className=" p-4 mr-4 ml-4 w-6/12">
                  <label className={mytext} htmlFor="prenom">Prénom</label><br />
                  <input name="prenom" className={rounded} onChange={handleChange}  placeholder=" John" type="text" value={formData.prenom} />
                  {errors.prenom && <span> Le champ de l'email est requis </span>}
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="p-4 mr-4 ml-4 w-6/12">
                  <label className={mytext} htmlFor="email">Email de Rappel</label><br />
                  <input name="email" className={rounded} onChange={handleChange}  value={formData.email} placeholder=" johndoe@gmail.com" type="email" />
                  {errors.email && <span> Le champ de l'email est requis</span>}
                </div>
                <div className="p-4 mr-4 ml-4 w-6/12">
                  <label className={mytext} htmlFor="montant">Montant dû(£)</label><br />
                  <input name="montant" className={rounded} onChange={handleChange}  placeholder=" 800" value={formData.montant} type="text" />
                  {errors.montant && <span>Le champ Montant est requis. </span>}
                </div>
              </div>
            </div>

            

            <div>
              <div className='p-5 mr-4 ml-4 w-9/12'>
                <label className={mytext} htmlFor="facture">Ajouter la Facture</label>
                <div className="w-full rounded-lg flex h-20 items-center flex-col  bg-gray-200 border-2 border-blue-700 border-dashed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                  </svg>
                  <p className="">Glisser et Déposer un fichier ou <Link className="text-blue-600" href={'/'}>Téléverser</Link></p>
                  
                </div>
              
              </div>
            </div>

            
            <div>
              <Button label="Enregistrer" classname={"bg-blue-600 text-white p-1 rounded-lg border-2 border-solid border-black-700"} Type={"submit"}></Button>
              <Button label="Annuler" classname={"bg-pink-200 ml-2 p-1 rounded-lg border-2 border-solid border-blue-700"} Type={"reset"}></Button> 
            </div>
            
          </form>
              


        </div>)
      };
