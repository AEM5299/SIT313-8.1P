import Card from './Card';

const CardList = ({ experts }) => {
    const cards = experts.map(expert => {
        return <Card expert={expert} key={expert.id} />
    });

    return <div>
        <h3 className="text-3xl text-center mt-6 mb-4">Featured Experts</h3>
        <div className="gap-x-5 gap-y-8 grid grid-cols-3 justify-items-center">{cards}</div>
    </div>
}

export default CardList;