"use client";
import Image from "next/image";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Typography, Link } from "@/shared";
import { Service } from "@/data/server";

import styles from "./styles.module.scss";

type Props = {
  data: Service[];
};

export function ServicesTable({ data }: Props) {
  const columnHelper = createColumnHelper<Service>();
  const columns = [
    columnHelper.accessor("id", {
      id: "id",
      header: "Id",
      size: 40,
    }),
    columnHelper.accessor("name", {
      id: "name",
      header: "Название",
      size: 80,
    }),
    columnHelper.accessor("icon", {
      id: "icon",
      header: "Иконка",
      cell: (props) => {
        const value = props.getValue();
        if (value) {
          return <Image src={value} alt="" width={40} height={40} />;
        }
      },
      size: 80,
    }),
    columnHelper.accessor("url", {
      id: "url",
      header: "Url",
      cell: (props) => {
        const value = props.getValue();
        if (value) {
          return <Link href={value}>{value}</Link>;
        }
      },
      size: 80,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      cell: (props) => {
        return (
          <Typography variant="text2">{String(props.renderValue())}</Typography>
        );
      },
    },
  });

  return (
    <div className={styles.table}>
      <table className={styles.table__table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      className={styles.table__th}
                      style={{ width: `${header.getSize()}px` }}
                    >
                      {!header.isPlaceholder && (
                        <Typography variant="text2" weight="bold">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </Typography>
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody className={styles.table__tbody}>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.table__tr}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.table__td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
