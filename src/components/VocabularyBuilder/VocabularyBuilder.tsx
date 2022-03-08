import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import {CustomTable} from '../UI/CustomTable';

const VocabularyBuilder = (props:any) => {
    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Word</th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
            {props.wordsList.map((input:any, i:number) => (
                    <tr key={i}>
                        <td>{input.word}</td>
                        <td>{input.meaning}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )

}

export default VocabularyBuilder;