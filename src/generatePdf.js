import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { assets } from './assets/assets.js';

export async function generatePdf(quote) {
    const existingPdfBytes = await fetch(assets.Quote_pdf_final).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);

    const pages = pdfDoc.getPages();

    // Embedding fonts
    const poppinsSemiBoldBytes = await fetch(assets.Poppins_SemiBold).then(res => res.arrayBuffer());
    const poppinsRegularBytes = await fetch(assets.Poppins_Regular).then(res => res.arrayBuffer());
    const poppinsBoldBytes = await fetch(assets.Poppins_Bold).then(res => res.arrayBuffer());

    const poppinsSemiBold = await pdfDoc.embedFont(poppinsSemiBoldBytes);
    const poppinsRegular = await pdfDoc.embedFont(poppinsRegularBytes);
    const poppinsBold = await pdfDoc.embedFont(poppinsBoldBytes);

    // Function to draw text on a given page at specified coordinates
    function drawTextOnPage(page, text, x, y, size, font, color) {
        page.drawText(text, {
            x: x,
            y: y,
            size: size,
            font: font,
            color: color,
        });
    }

    // Drawing text on pages 2, 3, and 4
    [pages[1], pages[2], pages[3]].forEach(page => {
        // Adding the total amount with Poppins_SemiBold
        drawTextOnPage(page, `$${quote.total}`, 47, 655, 29, poppinsSemiBold, rgb(240 / 255, 83 / 255, 45 / 255));

        // Adding the name with Poppins_Bold
        drawTextOnPage(page, quote.name, 30.47, 528.43, 9, poppinsBold, rgb(1, 1, 1));

        // Adding the email with Poppins_Regular
        drawTextOnPage(page, quote.email, 30.47, 513.37, 8, poppinsRegular, rgb(1, 1, 1));
    });

    // Adding additional details to the second page
    const page2 = pages[1];
    drawTextOnPage(page2, `$${quote.exchangeToSettlement}`, 444.5, 680, 7, poppinsRegular, rgb(0, 0, 0));
    drawTextOnPage(page2, `$0`, 500.9, 680, 7, poppinsRegular, rgb(0, 0, 0));
    drawTextOnPage(page2, `$${quote.exchangeToSettlement + 0}`, 552.5, 680, 7, poppinsRegular, rgb(0, 0, 0));
    drawTextOnPage(page2, `$${quote.exchangeToSettlement}`, 444.5, 658, 7, poppinsSemiBold, rgb(0, 0, 0));
    drawTextOnPage(page2, `$0`, 500.9, 658, 7, poppinsSemiBold, rgb(0, 0, 0));
    drawTextOnPage(page2, `$${quote.exchangeToSettlement + 0}`, 552.5, 658, 7, poppinsSemiBold, rgb(0, 0, 0));

    drawTextOnPage(page2, `$${quote.searchesEstimatedPrice}`, 444.5, 599, 7, poppinsRegular, rgb(0, 0, 0));
    drawTextOnPage(page2, `$0`, 500.9, 599, 7, poppinsRegular, rgb(0, 0, 0));
    drawTextOnPage(page2, `$${quote.searchesEstimatedPrice + 0}`, 552.5, 599, 7, poppinsRegular, rgb(0, 0, 0));
    drawTextOnPage(page2, `$${quote.verificationOfIdentity}`, 444.5, 576.9, 7, poppinsRegular, rgb(0, 0, 0));
    drawTextOnPage(page2, `$0`, 500.9, 576.9, 7, poppinsRegular, rgb(0, 0, 0));
    drawTextOnPage(page2, `$${quote.verificationOfIdentity + 0}`, 552.5, 576.9, 7, poppinsRegular, rgb(0, 0, 0));
    drawTextOnPage(page2, `$${quote.verificationOfIdentity + quote.searchesEstimatedPrice}`, 444.5, 552.69, 7, poppinsSemiBold, rgb(0, 0, 0));
    drawTextOnPage(page2, `$0`, 500.9, 552.69, 7, poppinsSemiBold, rgb(0, 0, 0));
    drawTextOnPage(page2, `$${quote.verificationOfIdentity + quote.searchesEstimatedPrice}`, 552.5, 552.69, 7, poppinsSemiBold, rgb(0, 0, 0));

    drawTextOnPage(page2, `$0`, 444.5, 495, 7, poppinsRegular, rgb(0, 0, 0));
    drawTextOnPage(page2, `$0`, 500.9, 495, 7, poppinsRegular, rgb(0, 0, 0));
    drawTextOnPage(page2, `$0`, 552.5, 495, 7, poppinsRegular, rgb(0, 0, 0));

    drawTextOnPage(page2, `$0`, 444.5, 471, 7, poppinsSemiBold, rgb(0, 0, 0));
    drawTextOnPage(page2, `$0`, 500.9, 471, 7, poppinsSemiBold, rgb(0, 0, 0));
    drawTextOnPage(page2, `$0`, 552.5, 471, 7, poppinsSemiBold, rgb(0, 0, 0));

    drawTextOnPage(page2, `$${quote.exchangeToSettlement + quote.verificationOfIdentity + quote.searchesEstimatedPrice}`, 444.5, 429.81, 7, poppinsSemiBold, rgb(1, 1, 1));
    drawTextOnPage(page2, `$${quote.gst}`, 500.9, 429.81, 7, poppinsSemiBold, rgb(1, 1, 1));
    drawTextOnPage(page2, `$${quote.exchangeToSettlement + quote.gst + quote.verificationOfIdentity + quote.searchesEstimatedPrice}`, 552.5, 429.81, 7, poppinsSemiBold, rgb(1, 1, 1));

   
        // Save the PDF document
        const pdfBytes = await pdfDoc.save();
    
        // Create a Blob from the PDF bytes
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    
        // Create a download link for the PDF
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${quote.name} Quote LoveHomes Conveyancing.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    
        // Create a FormData object to send the PDF and user details
        const formData = new FormData();
        formData.append('pdf', blob, 'Quotation.pdf'); // Append the PDF file
        formData.append('name', quote.name);
        formData.append('email', quote.email);
    
        // Send the FormData to the backend
        try {
            const response = await fetch('https://lovehomeconvyancingbackend-production.up.railway.app/api/email/send-email', {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
