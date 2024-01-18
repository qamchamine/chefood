import * as React from "react";
import ReactToPrint from "react-to-print";
import $ from 'jquery'
import { ComponentToPrint } from "./ComponentToPrint";

export default function PdfTicket({service ,date ,time,img , submit}){ 


  const componentRef = React.useRef(null); 
  const onBeforeGetContentResolve = React.useRef(null); 
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("old boring text"); 
  const handleAfterPrint = React.useCallback(() => {
  }, []);

  const handleBeforePrint = React.useCallback(() => {
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
  setLoading(true);
    setText("Loading new text...");

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 100);
    });
  }, [setLoading, setText]);

  React.useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current, text]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {

    return <button type='button' className="btn printTicketBtn disabled-btn text-white h-100" style={{background:'#33b249'}}    >Get Ticket</button>;
  }, []);

  return (
    <div>
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle="cheFood-ticket"
        onAfterPrint={handleAfterPrint}
        onBeforeGetContent={handleOnBeforeGetContent}
        onBeforePrint={handleBeforePrint}
        removeAfterPrint
        trigger={reactToPrintTrigger}
      />
      {loading && <p className="indicator text-success spinner-border fs-4" style={{translate:'0 80%'}}></p>}
      <ComponentToPrint ref={componentRef} text={text} service2={service} date2={date} time2={time} img2={img}  />
      
    </div>
  );
};
 