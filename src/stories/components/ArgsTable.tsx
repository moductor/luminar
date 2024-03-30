import { PureArgsTable } from "@storybook/blocks";
import React from "react";

// https://635781f3500dd2c49e189caf-ehrjgvcotm.chromatic.com/?path=/story/blocks-components-argstable-argstable--normal
// https://github.com/storybookjs/storybook/blob/next/code/ui/blocks/src/components/ArgsTable/ArgRow.stories.tsx

/*

{
  string: {
    key: "someString",
    name: "Some String",
    description: "someString description",
    type: {
      name: "string",
      required: true,
    },
    table: {
      defaultValue: {
        summary: "reallylongstringnospaces",
      },
    },
  },
  color: {
    key: "someColor",
    name: "Some Color",
    type: {
      name: "string",
    },
    description: "someColor description",
    defaultValue: "#ff0",
  },
}

*/

export type Args = {
  [key: string]: ArgItem;
};

export type ArgItem = {
  description?: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
};

type InternalArgs = {
  [key: string]: InternalArgItem;
};

type InternalArgItem = {
  key?: string;
  name?: string;
  description?: string;
  type?: {
    name?: string;
    required?: boolean;
  };
  table?: {
    defaultValue?: {
      summary?: string;
    };
  };
};

function toInternalArgs(args: Args) {
  const obj: InternalArgs = {};
  Object.keys(args).forEach((key) => {
    const { description, type, required, defaultValue } = args[key];
    obj[key] = {
      key,
      name: key,
      description,
      type: {
        name: type,
        required,
      },
      table: {
        defaultValue: {
          summary: defaultValue,
        },
      },
    };
  });
  return obj;
}

export default function ArgsTable({ args = {} }: { args?: Args }) {
  return <PureArgsTable rows={toInternalArgs(args)} />;
}
