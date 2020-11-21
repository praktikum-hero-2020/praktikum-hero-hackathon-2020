import React from 'react';
import './Title.scss';

export default ({ text, className }) => <h1 className={`title ${className}`}>{text}</h1>;
