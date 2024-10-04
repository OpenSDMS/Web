
export default function Device ({ params }: { params: { id: number }}) {
    return (
        <div>
            {params.id}
        </div>
    )
}