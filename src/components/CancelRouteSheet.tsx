interface Props {
  onCancel: () => void;
  onConfirm: () => void;
}

const CancelRouteSheet = ({ onCancel, onConfirm }: Props) => {
  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />

      {/* Sheet */}
      <div className="absolute bottom-0 w-full rounded-t-2xl bg-white p-5">
        <div className="mx-auto mb-3 h-1 w-10 rounded bg-gray-300" />

        <h2 className="text-lg font-semibold text-gray-900">Cancel Route?</h2>

        <p className="mt-2 text-sm text-gray-600">
          This will stop the current route & Reset all the details currently
          saved.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="w-full rounded-lg bg-red-500 py-3 text-sm font-semibold text-white"
          >
            Cancel & Exit Route
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelRouteSheet;
