"use client";

import { SortableTableHeader } from "@/components/sortable-table-header";
import { ColumnDef } from "@tanstack/react-table";
import { AaveAnalyticsOptions } from "./aave-analytics-options";

export const aave_analytics_columns: ColumnDef<IAaveAnalytics>[] = [
  {
    accessorKey: "asset",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          sortFn={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Asset"
        />
      );
    },
  },
  {
    accessorKey: "totalSupplied",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          sortFn={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Total supplied"
        />
      );
    },
  },
  {
    accessorKey: "supplyApy",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          sortFn={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Supply APY"
        />
      );
    },
  },
  {
    accessorKey: "totalBorrowed",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          sortFn={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Total borrowed"
        />
      );
    },
  },
  {
    accessorKey: "variableApy",
    header: ({ column }) => {
      return (
        <SortableTableHeader
          sortFn={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Variable B. APY"
        />
      );
    },
  },
  {
    id: "actions",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cell: ({ row }) => {
      // const asset = row.original;

      return <AaveAnalyticsOptions />;
    },
  },
];
