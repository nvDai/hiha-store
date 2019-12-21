export const convertSnapshotToSectionsArray = snapshot => {
	const sections = snapshot.docs.map(doc => doc.data())
	return sections.sort(compare)
}

function compare(a, b) {
	return a.id - b.id
}
