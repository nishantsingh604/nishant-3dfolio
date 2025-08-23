import React from 'react';
import ContactSection from './../components/ContactSection';
import TextPressure from '@/components/TextPressure';

const Contact = () => {
    return (
      <section className="w-full h-full min-h-screen bg-white  pt-20">
        <ContactSection />
        <div style={{ position: "relative", height: "250px" }}>
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