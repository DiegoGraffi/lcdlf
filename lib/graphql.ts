import { TadaDocumentNode, initGraphQLTada } from 'gql.tada';
import { print } from 'graphql';
import type { introspection } from '../graphql-env';
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from './constants';
import { ensureStartsWith } from './utils';

const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
  : '';
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export async function fetchGraphql<Result = any, Variables = any>(
  query: TadaDocumentNode<Result, Variables>,
  variables: Variables
): Promise<Result> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': key
    },
    body: JSON.stringify({
      query: print(query),
      variables
    }),
    cache: 'no-store'
  });
  return (await response.json()).data;
}

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    URL: string;
    Decimal: string;
    Color: string;
    DateTime: string;
    HTML: string;
  };
}>();

export { readFragment } from 'gql.tada';
export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada';
