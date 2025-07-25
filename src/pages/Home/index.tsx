import { EditorLayout } from "#/components/EditorLayout";
import { FileContentDisplay } from "#/FileContent";

export function Home() {
  return (
    <div class={`w-full min-h-screen bg-gray-900`}>
      <EditorLayout
        leftPanel={null}
        rightPanel={
          // <BaseSection>
          //   <AboutMeSection />
          // </BaseSection>
          <FileContentDisplay />
        }
      />
    </div>
  );
}
