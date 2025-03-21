import React from 'react';

function ContactForm() {
  return (
    <form className="max-w-md mx-auto mt-8 space-y-4">
      <input
        type="text"
        placeholder="Votre nom"
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Votre email"
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Votre message"
        className="w-full p-2 border rounded"
        rows="4"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
