'use client';
import { Badge } from '../ui/badge';
import { useRouter } from 'next/navigation';

interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/tags/${_id}`);
      }}
      className='flex justify-between gap-2'
    >
      <Badge className='subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase'>
        {name}
      </Badge>
      {showCount && (
        <p className='small-medium text-dark500_light700'>{totalQuestions}</p>
      )}
    </div>
  );
};

export default RenderTag;
