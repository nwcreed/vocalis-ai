import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-xl text-justify mx-auto px-4 py-8">
      <div className="mb-6">
        <a href="/" className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft size={20} className="mr-2" />
          <span className="text-lg">Retour</span>
        </a>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Politique de confidentialité de Vocalis AI
      </h1>
      
      <p className="text-gray-600 mb-6">
        Dernière mise à jour : 20/05/2025
      </p>
      
      <div className="space-y-6 text-gray-700">
        <p>
          Merci de votre visite sur Vocalis AI. 
          Cette politique de confidentialité décrit comment nous collectons, utilisons 
          et protégeons vos informations personnelles et non personnelles lorsque vous 
          utilisez notre site web à l'adresse https://quillminds.com.
        </p>
        
        <p>
          En accédant au site web ou en l'utilisant, vous acceptez les termes de la 
          présente politique de confidentialité. Si vous n'êtes pas d'accord avec les 
          pratiques décrites dans cette politique, veuillez ne pas utiliser le site web.
        </p>
        
        <div>
          <h2 className="mb-3">1. Informations que nous collectons</h2>
          
          <div className="ml-4">
            <h3 className="mb-2">1.1 Données personnelles</h3>
            
            <p className="mb-4">
             Nous collectons uniquement les adresses e-mail des utilisateurs intéressés par nos services, dans le seul but de les recontacter et de leur envoyer des informations liées à notre projet.
             Les données collectées sont strictement confidentielles et ne seront ni vendues ni partagées avec des tiers.

             Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer ce droit en nous contactant à l’adresse e-mail mentionnée ci-dessus.
            </p>
          </div>
          <div className="ml-4">
            <h3 className="mb-2">1.2 Données non personnelles</h3>
            
            <p className="mb-4">
            Nous pouvons utiliser des cookies web et des technologies similaires pour collecter des informations non personnelles telles que votre adresse IP, votre type de navigateur, les informations relatives à votre appareil et vos habitudes de navigation. Ces informations nous aident à améliorer votre expérience de navigation, à analyser les tendances et à améliorer nos services.
            </p>
          </div>
          <h2 className="mb-3">2. Partage de données</h2>
          <div className="ml-4">
            
            <p className="mb-4">
            Nous ne partageons pas vos données personnelles avec des tiers, sauf si cela est nécessaire à la fourniture de services (par exemple, partage de vos informations avec des processeurs de paiement). Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers.
            </p>
          </div>
          <h2 className="mb-3">3. Mises à jour de la politique de confidentialité</h2>
          <div className="ml-4">
            <p className="mb-4">
            Nous sommes susceptibles de mettre à jour cette Politique de confidentialité de temps à autre afin de refléter l'évolution de nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires. Toute mise à jour sera publiée sur cette page et nous vous informerons par e-mail des modifications importantes.
            </p>
          </div>
          <section className="mb-10">
          <h2 className="mb-3">4.Éditeur du site</h2>
          <p className="text-gray-700 leading-relaxed">
            Si vous avez des questions, des préoccupations ou des demandes concernant cette politique de confidentialité, vous pouvez nous contacter à 
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Contact :{' '}
            <a
              href="mailto:ton.email@example.com"
              className="underline hover:text-blue-500 cursor-pointer transition"
            >
              vocalisai.beta@gmail.com
            </a>
          </p>
          <p>
            Pour toute autre demande, veuillez visiter notre page Contactez-nous sur le site Web.
            <br/>
            En utilisant Vocalis AI, vous acceptez les termes de cette politique de confidentialité.</p>
        </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;