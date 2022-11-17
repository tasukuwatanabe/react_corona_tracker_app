import React from 'react';
import Loading from './Loading';

type ResultsType = {
    countryData: {
        date: string,
        newConfirmed: number,
        totalConfirmed: number,
        newRecovered: number,
        totalRecovered: number,
    },
    loading: boolean
}

const Results = ({ countryData, loading }: ResultsType) => {
    const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } = countryData;
    return (
        <div className='results-container'>
           {loading ?
                <Loading />
            :
                <div>
                    <p>日付: <span>{date}</span></p>
                    <p>新規感染者: <span>{newConfirmed}</span></p>
                    <p>感染者総数: <span>{totalConfirmed}</span></p>
                    <p>新規回復者: <span>{newRecovered}</span></p>
                    <p>回復者総数: <span>{totalRecovered}</span></p>
                </div>
            }
        </div>
    );
};

export default Results;