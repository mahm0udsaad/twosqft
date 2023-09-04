const ContentSquare = ({ number, title, description ,border , center}) => {
    return (
      <div className={`${border} border-black p-4 text-${center}`}>
        <div className="flex items-center space-x-2">
        <div className="text-4xl font-bold">{number}</div>
        <div className="text-xl font-bold">/{title}</div>
        </div>
        <p className='pt-5'>{description}</p>
      </div>
    );
  };

  export {ContentSquare}