import React from 'react'
import { ContainerInput } from '../../styles/components/nsInput';

interface InputProps {
    label: string;
    type: string;
    placeholder?: string;
}

export default function NsInput({ type = "text", label, placeholder }: InputProps) {
    return (
        <ContainerInput>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </ContainerInput>
    )
}

