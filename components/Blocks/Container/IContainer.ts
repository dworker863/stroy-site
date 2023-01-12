import React from 'react';

export interface IContainer {
  children: React.ReactNode;
  column?: boolean;
}

export interface IStyledContainer {
  column?: boolean;
}
