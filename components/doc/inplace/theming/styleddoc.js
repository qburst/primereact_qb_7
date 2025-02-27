import { DocSectionText } from '../../common/docsectiontext';

export function StyledDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>List of class names used in the styled mode.</p>
            </DocSectionText>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-inplace</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-inplace-display</td>
                            <td>Display container</td>
                        </tr>
                        <tr>
                            <td>p-inplace-content</td>
                            <td>Content container</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
