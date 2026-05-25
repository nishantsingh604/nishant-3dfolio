import React from 'react';
import ContactSection from './../components/ContactSection';
import TextPressure from '@/components/TextPressure';

const Contact = () => {
    return (
      <section className="w-full h-full min-h-screen bg-white  pt-50">
        <ContactSection />
        <div style={{ position: "relative", height: "540px" }}>
          <TextPressure
            text="Nishant"
            flex={true}
            alpha={false}
            stroke={true}
            width={true}
            weight={false}
            italic={true}
            textColor="black"
            strokeColor="blue"
            minFontSize={36}
          />
        </div>{" "}
        
      </section>
    );
};

export default Contact;
