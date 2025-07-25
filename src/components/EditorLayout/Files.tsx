import { MenuSection } from "./MenuSection";

export const FilesSection = () => {
  return (
    <MenuSection title="Dave Cook">
      <div className="p-2 flex flex-col space-y-2 text-sm">
        <div>logo</div>
        <div>me.json</div>
      </div>
    </MenuSection>
  );
};
