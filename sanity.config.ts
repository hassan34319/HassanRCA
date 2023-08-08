/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { user, account, verificationToken } from 'next-auth-sanity/schemas';

import { post } from "./sanity/PostSchemas/post";
import { dataset,projectId, } from "./sanity/env";
import {author} from "./sanity/PostSchemas/author";
import {course} from "./sanity/CourseSchemas/course";
import { lesson } from "./sanity/CourseSchemas/lesson";
import { teacher } from "./sanity/CourseSchemas/teacher";




export default defineConfig({
  name: "default",
  title: "RCA",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [course,lesson,teacher,user,post,author,account,verificationToken],
  },
});
