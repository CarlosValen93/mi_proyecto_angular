import { ICategory } from "./icategory.interface";

export interface IPost {
title: string;
text: string;
image: string;
publication: Date;
category: ICategory;
}
