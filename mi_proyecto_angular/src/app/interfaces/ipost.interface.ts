import { ICategory } from "./icategory.interface";

export interface IPost {
    _id:number;
title: string;
text: string;
author:string;
image: string;
publication: Date;
category: ICategory;
}
