'use client';
import React, { useEffect, useState } from "react";

interface Contact {
  _id: string;
  fullName: string;
  email: string;
  company: string;
  message: string;
}

interface Pagination {
  totalDocs: number;
  limit: number;
  page: number;
  nextPage: number | null;
  prevPage: number | null;
}

const getContactAPI = async (page = 1, limit = 10) => {
  const res = await fetch(`/api/contact/all?page=${page}&limit=${limit}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    });
  if (!res.ok) {
    throw new Error(`fetch error ${res.status}`);
  }
  
  console.log(res)

  return res.json();


};

const DasContactPage: React.FC = () => {
  const [data, setData] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getContactAPI(page, limit);
        setData(response.data);
        setPagination(response.pagination);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };
    fetchData();
  }, [limit, page]);

  return (
    <div>
      <h1>H</h1>


      {/* <GetAllContact /> */}

      {
        data.map((contact) => (
          <div style={{ border: '1px solid black', padding: '10px' }} key={contact._id}>
            <p>{contact.fullName}</p>
            <p>{contact.email}</p>
            <p>{contact.company}</p>
            <p>{contact.message}</p>
          </div>
        ))
      }
      
  
    </div>
  )

};

export default DasContactPage;
