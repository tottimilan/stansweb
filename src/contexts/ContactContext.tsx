'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ContactContextType {
  contactClicked: boolean;
  setContactClicked: (clicked: boolean) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [contactClicked, setContactClicked] = useState(false);

  return (
    <ContactContext.Provider value={{ contactClicked, setContactClicked }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}
