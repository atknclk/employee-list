import { Divider } from '@material-ui/core';

type ContentTitleProps = {
  title: string;
};

export const ContentTitle = ({ title }: ContentTitleProps) => {
  return (
    <div className="content-title">
      <div className="title">{title}</div>
      <Divider />
    </div>
  );
};
