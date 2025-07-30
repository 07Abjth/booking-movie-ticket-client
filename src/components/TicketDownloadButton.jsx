import React from 'react';
import { pdf } from '@react-pdf/renderer';
import {TicketPDF} from '../components/TicketPdf.jsx'; // Adjust the import path

export const TicketDownloadButton = ({ booking }) => {
    const handleDownload = async () => {
        try {
            const blob = await pdf(<TicketPDF booking={booking} />).toBlob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Ticket-${booking._id}.pdf`;
            link.click();
        } catch (error) {
            console.error('Error generating ticket PDF:', error);
        }
    };

    return (
        <button onClick={handleDownload}>
            Download Ticket
        </button>
    );
};

 