import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import Badge from '../components/Badge';
import '../App.css';

const Shows = () => {
  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: 'TV Show',
        columns: [
          {
            Header: 'Name',
            accessor: 'show.name'
          },
          {
            Header: 'Type',
            accessor: 'show.type'
          }
        ]
      },
      {
        Header: 'Details',
        columns: [
          {
            Header: 'Language',
            accessor: 'show.language'
          },
          {
            Header: 'Genre(s)',
            accessor: 'show.genres',
            Cell: ({ cell: { value } }) => <Badge values={value} />
          },
          {
            Header: 'Runtime',
            accessor: 'show.runtime',
            Cell: ({ cell: { value } }) => {
              const hour = Math.floor(value / 60);
              const min = Math.floor(value % 60);
              return (
                <>
                  {hour > 0 ? `${hour} hr${hour > 1 ? 's' : ''} ` : ''}
                  {min > 0 ? `${min} min${min > 1 ? 's' : ''}` : ''}
                </>
              );
            }
          },
          {
            Header: 'Status',
            accessor: 'show.status'
          }
        ]
      }
    ],
    []
  );

  useEffect(() => {
    (async () => {
      const result = await axios('https://api.tvmaze.com/search/shows?q=snow');
      setData(result.data);
    })();
  }, []);

  return (
    <div className="Shows">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Shows;
