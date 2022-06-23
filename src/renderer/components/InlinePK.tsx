import classnames from 'classnames';
import { ACCOUNTS_NONE_KEY } from '../data/accounts/accountInfo';
import CopyIcon from './CopyIcon';

const prettifyPubkey = (pk = '', formatLength: number) => {
  if (pk === null) {
    // cope with bad data in config
    return '';
  }
  return pk !== ACCOUNTS_NONE_KEY
    ? `${pk.slice(0, formatLength)}…${pk.slice(
        pk.length - formatLength,
        pk.length
      )}`
    : '';
};

const InlinePK: React.FC<{
  pk: string;
  className?: string;
  format?: boolean;
  formatLength?: number;
}> = ({ pk, className, format, formatLength }) => {
  return (
    <span className={classnames('flex items-center', className)}>
      <code>{format ? prettifyPubkey(pk, formatLength || 4) : pk}</code>
      <CopyIcon writeValue={pk} />
    </span>
  );
};

export default InlinePK;
