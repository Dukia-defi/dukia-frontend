"use client";

import { SortableTableHeader } from "@/components/sortable-table-header";
import { ColumnDef } from "@tanstack/react-table";
import { UniswapAnalyticsOptions } from "./uniswap-analytics-options";
import { IUniswapAnalytics } from "@/lib/types";

export const uniswap_analytics_columns: ColumnDef<IUniswapAnalytics>[] = [
  {
    accessorKey: "pool",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          sortFn={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Pool"
        />
      );
    },
  },
  {
    accessorKey: "tvl",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          sortFn={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="TVL"
        />
      );
    },
  },
  {
    accessorKey: "apr",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          sortFn={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="APR"
        />
      );
    },
  },
  {
    accessorKey: "dailyVolume",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          sortFn={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="1D Vol."
        />
      );
    },
  },
  {
    accessorKey: "monthlyVolume",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          sortFn={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="30D Vol."
        />
      );
    },
  },
  {
    id: "actions",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cell: ({ row }) => {
      // const pool = row.original;

      return <UniswapAnalyticsOptions />;
    },
  },
];
